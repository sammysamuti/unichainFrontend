import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Brain, Search, ArrowRight, GraduationCap, Shield, Users, MapPin, Link, Coins } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center w-full px-4">
      {/* Navigation */}
      <header className="w-full">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">UniChain</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
            </nav>
            <ModeToggle />
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full">
        <div className="container mx-auto py-20 px-4 md:px-6 flex flex-col items-center text-center">
          <Badge className="mb-4" variant="outline">
            Solana-Powered dApp
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">A Holistic Campus Ecosystem</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-10">
            UniChain integrates academic credential verification, mental health support, campus lost & found, and token minting into a
            single Solana-based platform for Ethiopian university students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Launch App <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-16 relative w-full max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden border bg-card shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=2000"
                alt="UniChain Platform Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full">
        <div className="container mx-auto py-24 px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="mb-4" variant="outline">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Four Powerful Solutions in One Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              UniChain combines academic, mental health, practical campus needs, and token rewards in a single decentralized application.
            </p>
          </div>

          <Tabs defaultValue="educhain" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="educhain">EduChain</TabsTrigger>
              <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
              <TabsTrigger value="lost-found">Lost & Found</TabsTrigger>
              <TabsTrigger value="token-minting">Token Minting</TabsTrigger>
            </TabsList>

            <TabsContent value="educhain" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Decentralized Academic Credentials
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Universities mint tamper-proof NFT credentials for students, ensuring academic integrity and easy
                    verification by employers.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Secure NFT-based diplomas and transcripts",
                      "Instant verification by employers",
                      "Student-controlled privacy settings",
                      "Tamper-proof academic records",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-6d2451b23c66?auto=format&fit=crop&q=80&w=1200"
                      alt="EduChain NFT Credential"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mental-health" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    Community-Driven Mental Health Support
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Students access anonymous peer support and earn tokens for contributing to the mental health
                    community.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Anonymous peer support groups",
                      "Token rewards for community contributions",
                      "AI-assisted initial support",
                      "Escalation to human volunteers when needed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                      alt="Mental Health Support Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lost-found" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Search className="h-6 w-6 text-primary" />
                    Campus Lost & Found Network
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A system to report and recover lost items on campus with token incentives for finders.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Campus-specific lost item feeds",
                      "Location-based geo-tagging",
                      "Token rewards for returning items",
                      "Secure, anonymous messaging",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
                      alt="Lost and Found Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="token-minting" className="space-y-4">
              <div className="container grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Coins className="h-6 w-6 text-primary" />
                    UniCoin Token Economy
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Earn and mint UniCoins through positive campus contributions, creating Ethiopia's first university-based token economy that rewards community engagement and support.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Earn tokens for helping fellow students find lost items",
                      "Get rewarded for providing mental health peer support",
                      "Exchange tokens for campus services and resources",
                      "Build your reputation through verifiable contributions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="h-3 w-3 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-card shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1642543492481-44e81e3914a6?auto=format&fit=crop&q=80&w=1200"
                      alt="UniCoin Token Economy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-muted/50">
        <div className="container mx-auto py-24 px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The UniChain Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our platform connects students, universities, and employers in a seamless blockchain experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: "University Onboarding",
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                description:
                  "Universities register on UniChain, add student profiles, and mint NFT diplomas with grades and photos.",
              },
              {
                title: "Student Engagement",
                icon: <Users className="h-10 w-10 text-primary" />,
                description:
                  "Students access their NFT credentials, join mental health groups, and earn tokens for helping peers.",
              },
              {
                title: "Community Action",
                icon: <MapPin className="h-10 w-10 text-primary" />,
                description:
                  "Students report lost items or post found ones, connecting through encrypted messaging for returns.",
              },
              {
                title: "Verification",
                icon: <Shield className="h-10 w-10 text-primary" />,
                description: "Employers scan QR codes to instantly verify student credentials on the public portal.",
              },
            ].map((step, i) => (
              <Card key={i} className="border bg-card">
                <CardHeader>
                  <div className="mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {i + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="container mx-auto py-24 px-4 md:px-6">
          <div className="rounded-2xl bg-gradient-to-br from-primary/90 to-primary p-8 md:p-12 shadow-lg text-primary-foreground">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Ready to Transform Your Campus Experience?
                </h2>
                <p className="text-xl opacity-90 mb-8">
                  Join UniChain today and be part of the decentralized revolution in Ethiopian universities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/login">
                    <Button size="lg" variant="secondary" className="gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="aspect-square rounded-xl overflow-hidden border shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80"
                    alt="UniChain Mobile App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl bg-primary-foreground/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">UniChain</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A holistic Solana-based dApp for Ethiopian university students.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "How It Works", "Pricing", "FAQ"],
              },
              {
                title: "Resources",
                links: ["Documentation", "API", "Privacy Policy", "Terms of Service"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="font-medium mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground"> 2023 UniChain. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["Twitter", "GitHub", "LinkedIn", "Discord"].map((social, i) => (
                <a key={i} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
