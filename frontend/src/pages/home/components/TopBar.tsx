import { SignedIn, SignedOut, SignOutButton} from "@clerk/clerk-react"
import SignedOAuthButton from "./SignedOAuthButton.tsx"


const TopBar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4 bg-zinc-800" >

        <div>Spotify</div>
        <SignedIn>
          <SignOutButton/>
        </SignedIn>
   <SignedOut>
        <SignedOAuthButton />
    </SignedOut>


    </div>

 
  )
}

export default TopBar