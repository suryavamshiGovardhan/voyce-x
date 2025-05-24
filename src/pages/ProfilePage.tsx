
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { 
  User, 
  Shield, 
  Bell, 
  Download, 
  Trash2, 
  Eye,
  Settings,
  Award,
  BookOpen,
  Heart
} from "lucide-react";

export default function ProfilePage() {
  const { t } = useLanguage();
  const [profileData, setProfileData] = useState({
    fullName: "Wellness Warrior",
    email: "user@example.com",
    mobile: "+91 98765 43210",
    ageGroup: "18-24 (College/Young Adult)",
    state: "Maharashtra",
    district: "Mumbai",
    language: "en",
    emergencyContact: "+91 98765 43211"
  });

  const [notifications, setNotifications] = useState({
    dailyTips: true,
    learningReminders: true,
    communityUpdates: false,
    newsEmails: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: false,
    shareProgress: true,
    anonymousMode: false
  });

  const userStats = {
    joinDate: "March 2024",
    modulesCompleted: 7,
    daysActive: 23,
    communityPoints: 156,
    certificatesEarned: 3
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Avatar className="h-20 w-20 mr-6">
              <AvatarFallback className="text-2xl">WW</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{profileData.fullName}</h1>
              <p className="text-muted-foreground">Member since {userStats.joinDate}</p>
              <div className="flex space-x-2 mt-2">
                <Badge variant="secondary">
                  <Award className="h-3 w-3 mr-1" />
                  {userStats.certificatesEarned} Certificates
                </Badge>
                <Badge variant="outline">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {userStats.modulesCompleted} Modules
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        value={profileData.mobile}
                        onChange={(e) => setProfileData({...profileData, mobile: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ageGroup">Age Group</Label>
                      <Select value={profileData.ageGroup} onValueChange={(value) => setProfileData({...profileData, ageGroup: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="13-17 (Student)">13-17 (Student)</SelectItem>
                          <SelectItem value="18-24 (College/Young Adult)">18-24 (College/Young Adult)</SelectItem>
                          <SelectItem value="25-34">25-34</SelectItem>
                          <SelectItem value="35-44">35-44</SelectItem>
                          <SelectItem value="45-54">45-54</SelectItem>
                          <SelectItem value="55+">55+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={profileData.state}
                        onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        value={profileData.district}
                        onChange={(e) => setProfileData({...profileData, district: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact (Optional)</Label>
                    <Input
                      id="emergencyContact"
                      placeholder="Trusted person's phone number"
                      value={profileData.emergencyContact}
                      onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      This will be stored securely and only accessible to you
                    </p>
                  </div>
                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Allow others to see your profile in community</p>
                    </div>
                    <Switch
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share Learning Progress</p>
                      <p className="text-sm text-muted-foreground">Let others see your achievements</p>
                    </div>
                    <Switch
                      checked={privacy.shareProgress}
                      onCheckedChange={(checked) => setPrivacy({...privacy, shareProgress: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Anonymous Mode</p>
                      <p className="text-sm text-muted-foreground">Hide your name in community interactions</p>
                    </div>
                    <Switch
                      checked={privacy.anonymousMode}
                      onCheckedChange={(checked) => setPrivacy({...privacy, anonymousMode: checked})}
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                </CardContent>
              </Card>

              {/* Notification Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Wellness Tips</p>
                      <p className="text-sm text-muted-foreground">Receive daily mental health tips</p>
                    </div>
                    <Switch
                      checked={notifications.dailyTips}
                      onCheckedChange={(checked) => setNotifications({...notifications, dailyTips: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Learning Reminders</p>
                      <p className="text-sm text-muted-foreground">Reminders to continue your learning journey</p>
                    </div>
                    <Switch
                      checked={notifications.learningReminders}
                      onCheckedChange={(checked) => setNotifications({...notifications, learningReminders: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Community Updates</p>
                      <p className="text-sm text-muted-foreground">New posts and discussions in community</p>
                    </div>
                    <Switch
                      checked={notifications.communityUpdates}
                      onCheckedChange={(checked) => setNotifications({...notifications, communityUpdates: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">Monthly newsletter with resources</p>
                    </div>
                    <Switch
                      checked={notifications.newsEmails}
                      onCheckedChange={(checked) => setNotifications({...notifications, newsEmails: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Data Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Data Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download My Data
                  </Button>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Account deletion is permanent and cannot be undone. All your data will be securely removed within 30 days.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Days Active</span>
                    <span className="font-semibold">{userStats.daysActive}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Modules Completed</span>
                    <span className="font-semibold">{userStats.modulesCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Community Points</span>
                    <span className="font-semibold">{userStats.communityPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Certificates</span>
                    <span className="font-semibold">{userStats.certificatesEarned}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm font-medium">Mindfulness Master</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-sm font-medium">Community Helper</p>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Knowledge Seeker</p>
                        <p className="text-xs text-muted-foreground">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Having trouble with your account or need support with the app?
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
