import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        hi this screen will only be visible to authenticated users
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
