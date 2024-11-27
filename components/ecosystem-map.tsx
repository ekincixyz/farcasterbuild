import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type BaseItem = {
  name: string;
  description: string;
}

type ItemWithUrl = BaseItem & {
  url: string;
}

type CategoryItem = BaseItem | ItemWithUrl;

type Category = {
  name: string;
  items: CategoryItem[];
}

export default function EcosystemMap() {
  const getImageData = (name: string) => {
    const imageMap: { [key: string]: { src: string; url: string } } = {
      // Clients section
      "Warpcast": { src: "https://framerusercontent.com/images/NPQ2QznhcPJe74h7DidacKsUIk.webp", url: "https://warpcast.com/" },
      "Super": { src: "https://www.supercast.xyz/supercast-logo-white.png", url: "https://supercast.xyz/" },
      "herocast": { src: "https://wrpcd.net/cdn-cgi/imagedelivery/BXluQx4ige9GuW0Ia56BHw/41ca8e4a-6129-40be-de09-c93fbfbc6400/anim=false,fit=contain,f=auto,w=288", url: "https://www.herocast.xyz/" },
      "Nook": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/ac6d0946-094b-4a93-811c-58b472eca700/original", url: "https://nook.social/" },
      "Recaster": { src: "https://recaster.org/logo.png", url: "https://recaster.org/" },
      "Fiids": { src: "https://i.imgur.com/uL8dCeX.jpeg", url: "https://www.fiids.xyz/" },
      "nounspace": { src: "https://external-content.duckduckgo.com/ip3/www.nounspace.com.ico", url: "https://www.nounspace.com/home" },
      "Yup": { src: "https://i.imgur.com/ZkZLQov.png", url: "https://yup.io/" },
      "Ketchup": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/cdd24150-e139-46a9-b2ba-24697b3f1400/original", url: "https://www.getketchup.xyz/" },
      "Sonata": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/448cc2d6-f46d-4a59-4aad-583753c39600/original", url: "https://www.sonata.tips/" },
      "Societa": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/8e05ef4e-43fe-461f-c403-b078761a8600/original", url: "https://societa.app/" },

      // Apps section
      "far.quest": { src: "https://i.imgur.com/IDwUTqX.png", url: "https://far.quest/" },
      "Buoy": { src: "https://i.imgur.com/S4saqOM.jpg", url: "https://buoy.club/" },
      "Searchcaster": { src: "https://searchcaster.xyz/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75", url: "https://searchcaster.xyz/" },
      "Launchcaster": { src: "https://i.imgur.com/jGXgax3.png", url: "https://www.launchcaster.xyz/" },
      "Anoncast": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/c933c6de-d9ba-4abd-2a7d-94bb0ce2bf00/original", url: "https://anoncast.org/" },
      "Eventcaster": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3ccade3d-2135-460c-cca0-a2262c0ccd00/rectcrop3", url: "https://events.xyz/" },
      "Seemore.tv": { src: "https://i.imgur.com/Grr5MlM.jpg", url: "https://seemore.tv/" },
      "Absorb": { src: "https://external-content.duckduckgo.com/ip3/www.getabsorb.com.ico", url: "https://www.getabsorb.com/" },
      "Kiwi News": { src: "https://i.imgur.com/bIljWiU.png", url: "https://news.kiwistand.com/" },
      "33bits": { src: "https://i.imgur.com/4DxOOCt.png", url: "https://33bits.xyz/" },
      "Interface": { src: "https://cdn.prod.website-files.com/62e931c01868f42946f92f26/66a21b0ff30dbe18cfc29b72_logo-p-500.png", url: "https://www.interface.social/" },

      // Bots section
      "Bounty Bot @bountybot": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/19c198a8-3bb6-469d-9a7a-52d8bfb43c00/original", url: "https://warpcast.com/bountybot" },
      "tokenbot @clanker": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d34acf16-9002-4a2d-a163-c552d0816300/original", url: "https://warpcast.com/clanker" },
      "Event Bot @event": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/3ccade3d-2135-460c-cca0-a2262c0ccd00/rectcrop3", url: "https://warpcast.com/event" },
      "Paragraph @paragraph": { src: "https://i.imgur.com/Mr9IG47.jpg", url: "https://warpcast.com/paragraph" },
      "indexer @indexer": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/8eaff001-cb64-4e90-f935-5e99e41ed800/rectcrop3", url: "https://warpcast.com/indexer" },
      "Ponder Surveys @survey": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/7d5d37b4-8658-43e8-ad5f-450b34fd4e00/original", url: "https://warpcast.com/survey" },

      // Dev Tools section
      "Neynar": { src: "https://i.imgur.com/UjBZ3pV.png", url: "https://neynar.com/" },
      "Airstack": { src: "https://i.imgur.com/f1X7fJx.jpg", url: "https://airstack.xyz/" },
      "Farcaster Kit": { src: "https://i.imgur.com/rPWLAmU.jpg", url: "https://www.farcasterkit.com/" },
      "Dynamic": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/991a2933-c112-4e8b-0f8a-3b6d185e3000/original", url: "https://www.dynamic.xyz/" },
      "Privy": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/39cff029-74e3-4b5b-77ed-0afc9b031f00/original", url: "https://privy.io/" },
      "dTech": { src: "https://dtech.vision/dTechLogoWhite.png", url: "https://dtech.vision/" },
      // Analytics section
      "Ponder": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/cabe6808-f469-42b9-6941-511d8abd3000/rectcrop3", url: "https://www.weponder.io/" },
      "Casterscan": { src: "https://i.imgur.com/PD1XTs5.jpg", url: "https://casterscan.com/" },
      "Farcaster Studio": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/e6eca365-7149-4542-6212-ee8b5c160400/rectcrop3", url: "https://farcasterstudio.com/" },
      "Web3.bio": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d984e36e-e040-4118-9122-b2027955de00/original", url: "https://web3.bio/" },
      "Casterbites": { src: "https://i.imgur.com/IeR2sbw.png", url: "https://www.casterbites.com/" },
      "Anser": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/81957195-7a92-4208-291b-53fb95fa3200/original", url: "https://www.anser.social/" },
      "Intelligent": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/81ccd496-7bb8-490a-b779-98b5eae54200/original", url: "https://intelligent.wtf/" },
      "Farcaster Hot 100": { src: "https://i.imgur.com/6vcGmum.jpg", url: "https://fc.hot100.xyz/" },
      "Terminal": { src: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/08ff9058-5f94-400a-494b-f7650359ff00/original", url: "https://www.terminal.co/" },
      "SQLcaster": { src: "https://external-content.duckduckgo.com/ip3/sqlcaster.xyz.ico", url: "https://sqlcaster.xyz/" },
      "Farcaster Docs": { src: "https://i.imgur.com/I2rEbPF.png", url: "https://docs.farcaster.xyz/developers/frames/" },
      "frames.js": { src: "https://i.imgur.com/usicrI6.jpg", url: "https://framesjs.org/" },
      "Frog": { src: "https://i.imgur.com/vsuZHzy.png", url: "https://frog.fm/" },
      "Fig": { src: "https://i.imgur.com/y1y1GeI.png", url: "https://github.com/paradigmxyz/Fig" },
      "Open Frames": { src: "https://i.imgur.com/z5tv4tu.png", url: "https://github.com/open-frames/standard/" },
      "Neynar Frame Studio": { src: "https://i.imgur.com/UjBZ3pV.png", url: "https://neynar.com/nfs" },
    }
    return imageMap[name] || { src: "/placeholder.svg", url: "#" }
  }

  const categories: Category[] = [
    {
      name: "Clients",
      items: [
        { name: "Warpcast", description: "Original Farcaster client by the Merkle Manufactory team" },
        { name: "Super", description: "Power user client" },
        { name: "herocast", description: "All-in-one Farcaster client for pros and teams" },
        { name: "Nook", description: "Track, review, and share your favorite content" },
        { name: "Recaster", description: "Client that offers extensive UI controls and configuration" },
        { name: "Fiids", description: "Professionalized, multi-feed forward client" },
        { name: "nounspace", description: "Farcaster client" },
        { name: "Yup", description: "Multi-network decentralized social client" },
        { name: "Ketchup", description: "Analytics, publishing, and scheduling casts" },
        { name: "Sonata", description: "Music Discovery" },
        { name: "Societa", description: "Solana Farcaster Client" },
      ]
    },
    {
      name: "Apps",
      items: [
        { name: "Interface", description: "Mobile companion for your Ethereum journey" },
        { name: "Buoy", description: "Search & Alerts" },
        { name: "Searchcaster", description: "Search" },
        { name: "Launchcaster", description: "Track project launches" },
        { name: "Anoncast", description: "Post anonymously to Farcaster and X/Twitter" },
        { name: "Eventcaster", description: "Meetups & Events" },
        { name: "Seemore.tv", description: "Automagic Creator Pages" },
        { name: "Absorb", description: "Video" },
        { name: "Kiwi News", description: "Community-curated links" },
        { name: "33bits", description: "Cast anonymously using zero knowledge proofs" },
        { name: "far.quest", description: "Gamified platform for exploring Farcaster with quests and rewards" }
      ]
    },
    {
      name: "Bots",
      items: [
        { name: "Bounty Bot @bountybot", description: "Post bounties and services" },
        { name: "Paragraph @paragraph", description: "Auto casts about the best posts on Paragraph" },
        { name: "tokenbot @clanker", description: "Create autonomous memecoins" },
        { name: "Ponder Surveys @survey", description: "The pulse of the Farcaster community" },
        { name: "Event Bot @event", description: "Notifies you about events" },
        { name: "indexer @indexer", description: "An AI agent that streamlines your Farcaster experience" }
      ]
    },
    {
      name: "Dev Tools",
      items: [
        { name: "Neynar", description: "Farcaster for ambitious builders" },
        { name: "Airstack", description: "The easiest way to build on Farcaster" },
        { name: "Farcaster Kit", description: "Free React hooks and API for Farcaster apps" },
        { name: "Dynamic", description: "Suite of tools for effortless log in, wallet creation and user management" },
        { name: "Privy", description: "Authentication and key management platform to securely onboard, activate, and manage your users at scale" },
        { name: "dTech", description: "Farcaster-focused development agency" }
      ]
    },
    {
      name: "Analytics",
      items: [
        { name: "Ponder", description: "Curating human insight" },
        { name: "Casterscan", description: "Inspired by block explorers" },
        { name: "Farcaster Studio", description: "All-in-one toolkit to grow on Farcaster" },
        { name: "Web3.bio", description: "Profiles" },
        { name: "Casterbites", description: "Your personalised daily bites of Farcaster" },
        { name: "Anser", description: "The ultimate suite for Web3 growth and marketing teams" },
        { name: "Intelligent", description: "Intelligently engage and form deeper connections with your audience on Farcaster" },
        { name: "Farcaster Hot 100", description: "Trending accounts of the past day" },
        { name: "Terminal", description: "Superchain tokens marketplace" },
        { name: "SQLcaster", description: "SQL-based analytics for Farcaster" }
      ]
    },
    {
      name: "Frames stack",
      items: [
        { name: "Farcaster Docs", description: "Frames Introduction" },
        { name: "frames.js", description: "The simplest way to make frames" },
        { name: "Frog", description: "Framework for Farcaster Frames" },
        { name: "Fig", description: "Frame Interface Guidelines" },
        { name: "Open Frames", description: "An open spec for building with Frames" },
        { name: "Neynar Frame Studio", description: "Unlimited, no-code frame editor" }
      ]
    },
    {
      name: "Open-source clients",
      items: [
        { name: "herocast", description: "Farcaster's leading open source client.", url: "https://github.com/hero-org/herocast" },
        { name: "Opencast", description: "Twitter flavoured Farcaster client.", url: "https://github.com/stephancill/opencast" },
        { name: "Litecast", description: "A beautiful yet simple Farcaster client", url: "https://github.com/dylsteck/litecast" },
        { name: "Nounspace", description: "A fork of Herocast without credits. Nounish farcaster client inspired by myspace.", url: "https://github.com/Nounspace/" }
      ]
    },
    {
      name: "Tools",
      items: [
        { name: "CastStorage", description: "Check your Farcaster storage usage.", url: "https://caststorage.com/" },
        { name: "fcstr", description: "Make user and channel RSS, Atom, and JSON feeds.", url: "https://feeds.fcstr.xyz/" },
        { name: "Sharecaster", description: "Make preview-friendly links to casts.", url: "https://sharecaster.xyz/" },
        { name: "Searchcaster", description: "Raycast extension for search.", url: "https://raycast.com/gregskril/searchcaster" },
        { name: "Fardrop", description: "Create an allowlist based on followers.", url: "https://fardrop.xyz/" },
        { name: "Hatecast", description: "Track who a user unfollows and who unfollows them.", url: "https://hatecast.xyz/" },
        { name: "Farcaster.vote", description: "Verifiable & decentralized polls within Farcaster Frames.", url: "https://farcaster.vote/app" },
        { name: "Composecast.xyz", description: "Privacy preserving, MIT licensed compose cast gateway", url: "https://github.com/0xSemicolon/composecastxyz" }
      ]
    }
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="fixed top-0 left-0 right-0 bg-background z-10">
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-center">Farcaster Ecosystem Map</h1>
              <p className="text-xl text-center text-muted-foreground">farcaster.build</p>
            </div>
            <Button asChild className="bg-[#855DCD] hover:bg-[#855DCD]/90">
              <a href="https://warpcast.com/emr.eth" target="_blank" rel="noopener noreferrer">
                List Project
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-32 grid gap-8">
        {categories.map((category) => (
          <div key={category.name} className="rounded-lg border-2 border-border p-6">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            {category.name === "Tools" || category.name === "Open-source clients" ? (
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    {('url' in item) ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">{item.name}</a>
                    ) : (
                      <span className="font-bold">{item.name}</span>
                    )} 
                    - {item.description}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <Card key={item.name} className="overflow-hidden">
                    <CardHeader className="p-4">
                      <div className="w-16 h-16 mx-auto mb-2">
                        {category.name === "Bots" ? (
                          <a href={getImageData(item.name).url} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={getImageData(item.name).src}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="rounded-full object-cover"
                            />
                          </a>
                        ) : (
                          <a href={getImageData(item.name).url} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={getImageData(item.name).src}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="rounded-lg object-contain"
                            />
                          </a>
                        )}
                      </div>
                      <CardTitle className="text-center text-sm">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground p-4 pt-0">
                      {item.description}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

