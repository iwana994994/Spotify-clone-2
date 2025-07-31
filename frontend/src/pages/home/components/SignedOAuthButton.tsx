import { Button } from "@/components/ui/button.tsx"
import { useSignIn } from "@clerk/clerk-react"



const SignedOAuthButton = () => {
    const{ signIn}=useSignIn()
    const signedInWithAGoogle=async ()=>{
        if (!signIn) {
    return;
  }
        signIn?.authenticateWithRedirect(
            {
                strategy:"oauth_google",
                redirectUrl:"/sso-callback",
                redirectUrlComplete:"/auth-callback"
            }
        )
    }
  return (
    <Button onClick={signedInWithAGoogle}>Sign in with Google</Button>

  )
}

export default SignedOAuthButton;