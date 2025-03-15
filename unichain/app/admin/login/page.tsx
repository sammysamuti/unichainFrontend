import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function UniversityForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });

  const { toast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/universities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast({ title: "Success", description: "University registered successfully." });
        setForm({ name: "", email: "", location: "", password: "" });
      } else {
        const data = await res.json();
        throw new Error(data.message || "Failed to register university.");
      }
    } catch (error) {
      toast({ title: "Error", description: error.message });
    }
  };

  return (
    <Card className="max-w-md mx-auto p-4 shadow-lg">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">University Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
