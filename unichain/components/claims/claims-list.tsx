"use client";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Claim {
  id: number;
  message: string;
  proofDetails: string;
  status: string;
  foundItemId: number;
  lostItemId: number;
  studentId: number;
  reviewedBy: number | null;
  reviewNote: string | null;
  reviewedAt: string | null;
  returnedAt: string | null;
  createdAt: string;
  updatedAt: string;
  foundItem: {
    id: number;
    title: string;
    description: string;
    location: string;
    dateFound: string;
    imageUrl: string;
    category: string;
    status: string;
    isReturned: boolean;
    finderId: number;
  };
  lostItem: {
    id: number;
    title: string;
    description: string;
    location: string;
    dateLost: string;
    imageUrl: string;
    category: string;
    status: string;
    ownerId: number;
    finderId: number;
  };
}

export function ClaimsList() {
  const [sentClaims, setSentClaims] = useState<Claim[]>([]);
  const [receivedClaims, setReceivedClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviewNote, setReviewNote] = useState("");
  const userId = typeof window !== 'undefined' ? localStorage.getItem("userId") : null;

  useEffect(() => {
    if (!userId) return;

    const fetchClaims = async () => {
      try {
        const [sentResponse, receivedResponse] = await Promise.all([
          api.get(`api/claims/sent/${userId}`),
          api.get(`api/claims/received/${userId}`)
        ]);

        setSentClaims(sentResponse.data || []);
        setReceivedClaims(receivedResponse.data || []);
      } catch (err) {
        setError("Failed to fetch claims");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, [userId]);

  const handleReviewClaim = async (claimId: number, status: "ACCEPTED" | "REJECTED") => {
    if (!userId) return;

    try {
      await api.put(`api/claims/${claimId}/review`, {
        finderId: userId,
        status,
        reviewNote
      });

      // Refresh claims after review
      const receivedResponse = await api.get(`api/claims/received/${userId}`);
      setReceivedClaims(receivedResponse.data || []);
      setReviewNote("");
    } catch (err) {
      console.error(err);
      setError("Failed to review claim");
    }
  };

  const handleMarkAsReturned = async (claimId: number) => {
    if (!userId) return;

    try {
      await api.put(`api/claims/${claimId}/return`, {
        finderId: userId
      });

      // Refresh claims after marking as returned
      const [sentResponse, receivedResponse] = await Promise.all([
        api.get(`api/claims/sent/${userId}`),
        api.get(`api/claims/received/${userId}`)
      ]);

      setSentClaims(sentResponse.data || []);
      setReceivedClaims(receivedResponse.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to mark claim as returned");
    }
  };

  if (loading) return <div>Loading claims...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Sent Claims</h2>
        <div className="grid gap-4">
          {sentClaims.map((claim) => (
            <Card key={claim.id}>
              <CardHeader>
                <CardTitle>{claim.foundItem.title}</CardTitle>
                <CardDescription>Claim ID: {claim.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Status:</strong> <Badge>{claim.status}</Badge></p>
                  <p><strong>Message:</strong> {claim.message}</p>
                  <p><strong>Location:</strong> {claim.foundItem.location}</p>
                  {claim.reviewNote && (
                    <p><strong>Review Note:</strong> {claim.reviewNote}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Received Claims</h2>
        <div className="grid gap-4">
          {receivedClaims.map((claim) => (
            <Card key={claim.id}>
              <CardHeader>
                <CardTitle>{claim.foundItem.title}</CardTitle>
                <CardDescription>Claim ID: {claim.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Status:</strong> <Badge>{claim.status}</Badge></p>
                  <p><strong>Message:</strong> {claim.message}</p>
                  <p><strong>Location:</strong> {claim.foundItem.location}</p>
                  <Input
                    placeholder="Add a review note..."
                    value={reviewNote}
                    onChange={(e) => setReviewNote(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {claim.status === "PENDING" && (
                  <>
                    <Button 
                      onClick={() => handleReviewClaim(claim.id, "ACCEPTED")}
                      variant="default"
                    >
                      Accept
                    </Button>
                    <Button 
                      onClick={() => handleReviewClaim(claim.id, "REJECTED")}
                      variant="destructive"
                    >
                      Reject
                    </Button>
                  </>
                )}
                {claim.status === "ACCEPTED" && !claim.returnedAt && (
                  <Button onClick={() => handleMarkAsReturned(claim.id)}>
                    Mark as Returned
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
