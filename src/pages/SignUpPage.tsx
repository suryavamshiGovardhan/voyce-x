
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Brain, Shield, Users } from "lucide-react";

export default function SignUpPage() {
  const { t } = useLanguage();
  const { signUp, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    ageGroup: "",
    state: "",
    district: "",
    language: "en",
    agreeToTerms: false,
    subscribeNewsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const ageGroups = [
    "13-17 (Student)", "18-24 (College/Young Adult)", "25-34", "35-44", "45-54", "55+"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        formData.mobile,
        formData.ageGroup,
        formData.state,
        formData.district
      );
      
      if (!error) {
        navigate('/dashboard');
      }
    } catch (err) {
      // Error already handled by auth context with toast
      if (import.meta.env.DEV) {
        console.error('Signup error:', err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect if already logged in
  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Brain className="mx-auto h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold">Join VOYCE Community</h2>
            <p className="mt-2 text-muted-foreground">
              Start your journey towards better mental wellness
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
              <p className="text-xs text-muted-foreground mt-1">Optional: We'll send updates about your wellness journey</p>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="ageGroup">Age Group</Label>
              <Select value={formData.ageGroup} onValueChange={(value) => setFormData({...formData, ageGroup: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your age group" />
                </SelectTrigger>
                <SelectContent>
                  {ageGroups.map((group) => (
                    <SelectItem key={group} value={group}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                type="text"
                placeholder="Enter your district"
                value={formData.district}
                onChange={(e) => setFormData({...formData, district: e.target.value})}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked as boolean})}
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                I agree to VOYCE's <Link to="/terms" className="text-primary hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="subscribeNewsletter"
                checked={formData.subscribeNewsletter}
                onCheckedChange={(checked) => setFormData({...formData, subscribeNewsletter: checked as boolean})}
              />
              <Label htmlFor="subscribeNewsletter" className="text-sm">
                Subscribe to mental wellness newsletter
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={!formData.agreeToTerms || isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <p className="text-xs text-muted-foreground">Your data is secure</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary mb-2" />
              <p className="text-xs text-muted-foreground">Join 10,000+ users</p>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8 text-primary mb-2" />
              <p className="text-xs text-muted-foreground">Expert guidance</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
