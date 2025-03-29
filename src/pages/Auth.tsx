
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Check if user is already authenticated
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  if (isAuthenticated) {
    return <Navigate to="/chat" />;
  }

  const handleSendOTP = () => {
    // Validate phone number (simple validation)
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to send OTP
    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to ${phoneNumber}`,
      });
    }, 1500);
  };

  const handleVerifyOTP = () => {
    // Validate OTP (in a real app, this would verify with backend)
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to verify OTP
    setTimeout(() => {
      // For demo purposes, let's consider any 6-digit OTP as valid
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("phoneNumber", phoneNumber);
      
      setIsLoading(false);
      toast({
        title: "Authentication Successful",
        description: "You have been logged in successfully",
      });
      
      navigate("/chat");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome to ChatApp</CardTitle>
          <CardDescription>
            {otpSent
              ? "Enter the verification code sent to your phone"
              : "Sign in with your phone number"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!otpSent ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Verification Code
                </label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                    containerClassName="gap-2"
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Didn't receive a code?{" "}
                  <button
                    onClick={() => {
                      setOtpSent(false);
                      setOtp("");
                    }}
                    className="text-primary underline hover:text-primary/80"
                  >
                    Try again
                  </button>
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={otpSent ? handleVerifyOTP : handleSendOTP}
            disabled={isLoading}
          >
            {isLoading
              ? "Please wait..."
              : otpSent
              ? "Verify Code"
              : "Send Verification Code"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
