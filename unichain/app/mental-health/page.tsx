"use client"
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
import { PageContainer } from "@/components/page-container";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const MOODS = [
  '😊 Happy',
  '😐 Neutral',
  '😢 Sad',
  '😡 Angry',
  '😨 Anxious',
  '😴 Tired',
  '🤩 Excited'
];

const MOOD_SCORES = {
  '😊 Happy': 4,
  '😐 Neutral': 3,
  '😢 Sad': 1,
  '😡 Angry': 2,
  '😨 Anxious': 2,
  '😴 Tired': 3,
  '🤩 Excited': 5
};

function getLatestMood(logs: any[]) {
  if (!logs.length) return null;
  const today = new Date().toLocaleDateString();
  const todayLogs = logs.filter(log => 
    new Date(log.timestamp).toLocaleDateString() === today
  );
  return todayLogs[0]?.mood || null;
}

function getMoodLabel(mood: string | number) {
  if (!mood) return 'No Data';
  const score = MOOD_SCORES[mood];
  if (score >= 4) return 'Great';
  if (score >= 3) return 'Good';
  if (score >= 2) return 'Okay';
  return 'Low';
}

export default function MentalHealthPage() {
  const [selectedMood, setSelectedMood] = useState('');
  const [notes, setNotes] = useState('');
  const [logs, setLogs] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLogs = localStorage.getItem('moodLogs');
      return savedLogs ? JSON.parse(savedLogs) : [];
    }
    return [];
  });
  const [showHistory, setShowHistory] = useState(false);

  const latestMood = getLatestMood(logs);
  const moodLabel = getMoodLabel(latestMood);
  const moodScore = latestMood ? MOOD_SCORES[latestMood] : 0;
  const progressValue = (moodScore / 5) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) return;

    const newLog = {
      mood: selectedMood,
      notes,
      timestamp: new Date().toLocaleString()
    };

    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem('moodLogs', JSON.stringify(updatedLogs));

    setSelectedMood('');
    setNotes('');
  };

  return (
    <PageContainer>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Mental Health Resources
        </h1>
        <p className="text-muted-foreground">
          Access wellness resources, track your mood, and connect with support
          networks
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="w-full mt-6">
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
                <div className="text-2xl font-bold">{moodLabel}</div>
                <Progress value={progressValue} className="mt-2" />
                <p className="mt-2 text-xs text-muted-foreground">
                  {latestMood ? `Your current mood: ${latestMood}` : 'No mood logged today'}
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
                      <FileText className="h-10 w-10 rounded bg-primary/10 p-2" />
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
                    Select Mood
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {MOODS.map(mood => (
                      <Button
                        type="button"
                        variant={selectedMood === mood ? 'default' : 'outline'}
                        key={mood}
                        onClick={() => setSelectedMood(mood)}
                        className="h-12"
                      >
                        {mood}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
                    Notes
                  </label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add any additional notes..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Save Mood Log
                </Button>
              </form>

              {showHistory && (
                <div className="mt-6 space-y-4">
                  <h2 className="text-lg font-semibold">Mood History</h2>
                  {logs.length > 0 ? (
                    logs.map((log: { mood: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; timestamp: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; notes: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg">{log.mood}</span>
                          <span className="text-sm text-muted-foreground">
                            {log.timestamp}
                          </span>
                        </div>
                        {log.notes && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {log.notes}
                          </p>
                        )}
                      </Card>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No mood logs yet. Start tracking your mood!
                    </p>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? 'Hide History' : 'View History'}
              </Button>
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
    </PageContainer>
  );
}

function FileIcon(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <FileText />
    </div>
  );
}
