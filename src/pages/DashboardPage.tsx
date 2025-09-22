import NavBar from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  MapPin,
  Calendar,
  Heart,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const DashboardPage = () => {
  const stats = [
    {
      icon: Users,
      title: "Total Users Reached",
      value: "12,450",
      change: "+18%",
      period: "This Month",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Conversations",
      value: "8,230",
      change: "+25%",
      period: "This Week",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Health Assessments",
      value: "3,180",
      change: "+12%",
      period: "This Week",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Vaccination Reminders",
      value: "1,580",
      change: "+8%",
      period: "This Month",
      color: "text-success"
    }
  ];

  const regionData = [
    { region: "Bhubaneswar", users: 3200, percentage: 65, color: "bg-primary" },
    { region: "Cuttack", users: 2100, percentage: 42, color: "bg-secondary" },
    { region: "Puri", users: 1800, percentage: 36, color: "bg-accent" },
    { region: "Berhampur", users: 1500, percentage: 30, color: "bg-success" },
    { region: "Rural Areas", users: 3850, percentage: 77, color: "bg-warning" }
  ];

  const recentAlerts = [
    {
      type: "Outbreak",
      message: "Dengue cases reported in Khordha district",
      time: "2 hours ago",
      status: "active",
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      type: "Vaccination",
      message: "COVID booster drive starts Monday",
      time: "4 hours ago", 
      status: "info",
      icon: Calendar,
      color: "text-primary"
    },
    {
      type: "Success",
      message: "1000+ health queries resolved today",
      time: "6 hours ago",
      status: "success",
      icon: CheckCircle,
      color: "text-success"
    }
  ];

  const languageUsage = [
    { language: "English", users: 5200, percentage: 42 },
    { language: "Hindi", users: 4100, percentage: 33 },
    { language: "Odia", users: 3150, percentage: 25 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Impact Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time insights into our health chatbot's reach and effectiveness
            </p>
          </div>

          {/* Key Statistics */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.title} className="p-6 bg-gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.period}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Regional Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary">Regional Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Odisha Coverage Map
                </h3>
                <div className="space-y-4">
                  {regionData.map((region) => (
                    <div key={region.region}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{region.region}</span>
                        <span className="text-sm text-muted-foreground">{region.users.toLocaleString()} users</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${region.color}`}
                          style={{ width: `${region.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card">
                <h3 className="text-xl font-semibold mb-6">Language Preferences</h3>
                <div className="space-y-4">
                  {languageUsage.map((lang) => (
                    <div key={lang.language} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-primary rounded-full" />
                        <span className="font-medium">{lang.language}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{lang.users.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">{lang.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary">Recent Alerts & Updates</h2>
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background border border-border">
                    <alert.icon className={`w-5 h-5 mt-0.5 ${alert.color}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{alert.message}</span>
                        <Badge 
                          variant={alert.status === "active" ? "default" : alert.status === "success" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Impact Metrics */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary">Health Impact Metrics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-card shadow-card text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-success" />
                <h3 className="text-2xl font-bold mb-2">85%</h3>
                <p className="text-sm text-muted-foreground">User Satisfaction Rate</p>
                <p className="text-xs text-muted-foreground mt-2">Based on post-conversation surveys</p>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-2">1,250</h3>
                <p className="text-sm text-muted-foreground">Early Diagnoses Assisted</p>
                <p className="text-xs text-muted-foreground mt-2">Users referred to healthcare providers</p>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">95%</h3>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                <p className="text-xs text-muted-foreground mt-2">Verified by medical professionals</p>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;