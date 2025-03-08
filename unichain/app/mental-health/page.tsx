import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  Heart,
  Users,
  Bookmark,
  ArrowRight,
  FileText,
} from "lucide-react";

export default function MentalHealthPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Mental Health Resources
        </h1>
        <p className="text-muted-foreground">
          Access wellness resources, track your mood, and connect with support
          networks
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="mood-tracker">Mood Tracker</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Today's Mood
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <Progress value={72} className="mt-2" />
                <p className="mt-2 text-xs text-muted-foreground">
                  Your mood is 15% better than yesterday
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-1 text-xs"
                >
                  <Heart className="h-3 w-3" /> Log mood
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Upcoming Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">
                  Mindfulness Meditation
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Tomorrow, 3:00 PM</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>45 minutes</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-1 text-xs"
                >
                  View details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Support Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="text-sm">3 active connections</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Last activity: 3 hours ago
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-1 text-xs"
                >
                  Open chat
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          {[
            "Stress Management",
            "Depression & Anxiety",
            "Healthy Sleep Habits",
          ].map((topic, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{topic}</CardTitle>
                <CardDescription>
                  Practical guides and resources for {topic.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[1, 2, 3].map((resource) => (
                  <div
                    key={resource}
                    className="flex items-center justify-between rounded-md p-2 hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <FileIcon className="h-10 w-10 rounded bg-primary/10 p-2" />
                      <div>
                        <div className="font-medium">
                          {topic} Guide {resource}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          PDF • 5 min read
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full gap-1">
                  View all resources <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="mood-tracker">
          <Card>
            <CardHeader>
              <CardTitle>Mood Tracking</CardTitle>
              <CardDescription>
                Track your mood patterns over time to identify triggers and
                improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] rounded-md border border-dashed p-6 text-center">
                <div className="text-muted-foreground">
                  Mood tracking chart visualization would appear here
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View History</Button>
              <Button>Log Today's Mood</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="community">
          <Card>
            <CardHeader>
              <CardTitle>Support Community</CardTitle>
              <CardDescription>
                Connect with peers and mental health advocates in a safe
                environment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">
                  Active Discussion Groups
                </h3>
                <div className="grid gap-2">
                  {[
                    "Stress Management",
                    "Mindfulness Practice",
                    "Academic Pressure",
                  ].map((group, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <div className="font-medium">{group}</div>
                        <div className="text-xs text-muted-foreground">
                          23 members • Active now
                        </div>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Browse All Communities
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FileIcon(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <FileText />
    </div>
  );
}
