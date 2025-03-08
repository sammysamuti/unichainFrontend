import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Brain,
  FileText,
  Search,
  Wallet,
  Users,
  MessageSquare,
  MapPin,
  TrendingUp,
  Shield,
} from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { RecentActivity } from "@/components/recent-activity";
import { TokenBalance } from "@/components/token-balance";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-card px-4 py-12 md:py-24">
        <div className="hero-glow left-1/4 top-1/4"></div>
        <div className="hero-glow right-1/4 bottom-1/4"></div>
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm">
                <span className="mr-2 inline-block rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                  New
                </span>
                <span>Solana-powered campus ecosystem</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="gradient-text">UniChain</span> Campus Ecosystem
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Manage your academic credentials, access mental health support,
                and find lost items - all in one decentralized platform.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/credentials">
                    <Award className="mr-2 h-5 w-5" />
                    View Credentials
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/wallet">
                    <Wallet className="mr-2 h-5 w-5" />
                    Connect Wallet
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] animate-float">
                <img
                  src="/nft.png"
                  alt="NFT Credential"
                  className="h-full w-full rounded-lg object-cover shadow-xl gradient-border"
                />
                <div className="absolute -bottom-4 -right-4 rounded-lg bg-card p-3 shadow-lg gradient-border">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="container mx-auto py-6">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Academic Credentials"
            value="5"
            description="NFT credentials in your wallet"
            icon={<Award className="h-4 w-4 text-primary" />}
          />
          <StatCard
            title="Mental Health Points"
            value="120"
            description="UniTokens earned from participation"
            icon={<Brain className="h-4 w-4 text-primary" />}
          />
          <StatCard
            title="Lost & Found"
            value="2"
            description="Items successfully recovered"
            icon={<Search className="h-4 w-4 text-primary" />}
          />
        </div>

        <div className="mt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Wallet Balance
                    </CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <TokenBalance />
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Token Activity
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="h-[200px] flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      Token activity chart will appear here
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your latest interactions on UniChain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>
                      Common tasks you can perform
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <Button variant="outline" className="justify-start">
                      <Award className="mr-2 h-4 w-4" />
                      View Diploma NFT
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Join Support Group
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <MapPin className="mr-2 h-4 w-4" />
                      Report Lost Item
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="credentials">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="gradient-border overflow-hidden">
                  <CardHeader className="pb-0">
                    <CardTitle>Diploma</CardTitle>
                    <CardDescription>
                      Bachelor of Science in Computer Science
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=300&width=225"
                        alt="Diploma NFT"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button size="sm">Share</Button>
                  </CardFooter>
                </Card>

                <Card className="gradient-border overflow-hidden">
                  <CardHeader className="pb-0">
                    <CardTitle>Transcript</CardTitle>
                    <CardDescription>
                      Academic Records 2023-2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=300&width=225"
                        alt="Transcript NFT"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button size="sm">Share</Button>
                  </CardFooter>
                </Card>

                <Card className="gradient-border overflow-hidden">
                  <CardHeader className="pb-0">
                    <CardTitle>Certificate</CardTitle>
                    <CardDescription>
                      Blockchain Development Course
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="aspect-[3/4] rounded-md overflow-hidden">
                      <img
                        src="/placeholder.svg?height=300&width=225"
                        alt="Certificate NFT"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button size="sm">Share</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest interactions on UniChain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity extended={true} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Features Section */}
        <section className="mt-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="mt-2 text-muted-foreground">
              Explore the three pillars of the UniChain ecosystem
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Academic Credentials</CardTitle>
                <CardDescription>
                  Secure, verifiable academic records as NFTs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Tamper-proof diplomas and certificates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Instant verification by employers
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Selective sharing with privacy controls
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mental Health Support</CardTitle>
                <CardDescription>
                  Anonymous peer support with token incentives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Anonymous group chats and counseling
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Earn tokens for positive contributions
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    AI-assisted initial support and resources
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Lost & Found Network</CardTitle>
                <CardDescription>
                  Campus-wide system for recovering lost items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Report lost items with photos and details
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Geo-tagging for location-based searches
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    Token rewards for returning found items
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
