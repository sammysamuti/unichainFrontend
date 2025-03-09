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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Brain, Lock, MessageSquare, Shield, Users } from "lucide-react";
import { PageContainer } from "@/components/page-container";

export default function SupportGroupsPage() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
  ];

  return (
    <PageContainer>
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Mental Health Support
        </h1>
        <p className="text-muted-foreground">
          Join anonymous support groups and earn tokens for positive
          contributions
        </p>
      </div>

      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="counseling">Counseling</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Stress Management Group */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Stress Management</CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>24 members</span>
                  </Badge>
                </div>
                <CardDescription>
                  Techniques and support for managing academic stress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex -space-x-2">
                    {avatarImages.map((src, i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={src} />
                        <AvatarFallback>A{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs">
                      +19
                    </div>
                  </div>

                  <div className="rounded-md bg-muted p-3">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Anonymous participation
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      "This group helped me develop effective strategies for
                      managing exam anxiety."
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>

            {/* Depression Support Group */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Depression Support</CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>18 members</span>
                  </Badge>
                </div>
                <CardDescription>
                  Safe space for discussing and managing depression
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex -space-x-2">
                    {avatarImages.slice(0, 4).map((src, i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={src} />
                        <AvatarFallback>A{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs">
                      +14
                    </div>
                  </div>

                  <div className="rounded-md bg-muted p-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Moderated by counselors
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      "Finding others who understand what I'm going through has
                      been life-changing."
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>

            {/* Anxiety Support Group */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Anxiety Support</CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>21 members</span>
                  </Badge>
                </div>
                <CardDescription>
                  Coping strategies and support for anxiety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex -space-x-2">
                    {avatarImages.map((src, i) => (
                      <Avatar key={i} className="border-2 border-background">
                        <AvatarImage src={src} />
                        <AvatarFallback>A{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs">
                      +16
                    </div>
                  </div>

                  <div className="rounded-md bg-muted p-3">
                    <div className="flex items-center gap-2">
                      <Brain className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Earn tokens for participation
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      "The breathing techniques shared here have helped me
                      manage panic attacks."
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Group
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="counseling" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>One-on-One Counseling</CardTitle>
                <CardDescription>
                  Schedule private sessions with licensed counselors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md bg-muted p-4">
                    <h3 className="font-medium">How it works</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                          1
                        </div>
                        <span>Request a session using your wallet address</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                          2
                        </div>
                        <span>
                          Choose between in-person or virtual sessions
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                          3
                        </div>
                        <span>
                          Connect anonymously with a licensed counselor
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Available Counselors</h3>
                    <div className="mt-4 space-y-3">
                      {[
                        {
                          name: "Dr. Abebe",
                          specialty: "Anxiety & Depression",
                        },
                        { name: "Dr. Sara", specialty: "Academic Stress" },
                        {
                          name: "Dr. Mekonnen",
                          specialty: "Relationship Issues",
                        },
                      ].map((counselor, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage
                                src={`/placeholder.svg?height=40&width=40&text=${i}`}
                              />
                              <AvatarFallback>
                                {counselor.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{counselor.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {counselor.specialty}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Book
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Schedule a Session</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Support Assistant</CardTitle>
                <CardDescription>
                  Get immediate support from our AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md bg-muted p-4">
                    <h3 className="font-medium">Benefits</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Available 24/7 for immediate support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Completely anonymous and private</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>
                          Can escalate to human counselors when needed
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>Provides resources and coping strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-md border p-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">UniChain AI Assistant</p>
                        <p className="text-xs text-muted-foreground">
                          Trained on mental health resources
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-muted p-3">
                      <p className="text-sm">
                        "Hi there! I'm here to listen and provide support. How
                        are you feeling today?"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Chat with AI Assistant</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Stress Management Guide",
                description: "Techniques for managing academic stress",
                image: "/placeholder.svg?height=200&width=300",
                tokens: "5 UniTokens",
              },
              {
                title: "Mindfulness Meditation",
                description: "Audio guides for daily meditation practice",
                image: "/placeholder.svg?height=200&width=300",
                tokens: "10 UniTokens",
              },
              {
                title: "Sleep Improvement",
                description: "Strategies for better sleep quality",
                image: "/placeholder.svg?height=200&width=300",
                tokens: "5 UniTokens",
              },
              {
                title: "Anxiety Workbook",
                description: "Interactive exercises for anxiety management",
                image: "/placeholder.svg?height=200&width=300",
                tokens: "15 UniTokens",
              },
              {
                title: "Healthy Relationships",
                description: "Building and maintaining healthy connections",
                image: "/placeholder.svg?height=200&width=300",
                tokens: "8 UniTokens",
              },
              {
                title: "Crisis Management",
                description: "What to do during mental health emergencies",
                image: "/placeholder.svg?height=200&width=300",
                tokens: "Free",
              },
            ].map((resource, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Badge variant="outline">{resource.tokens}</Badge>
                  <Button size="sm">Access Resource</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
