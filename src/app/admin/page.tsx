import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "../logout/actions";
import { Button } from "@/components/ui/button";

export default async function Admin() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="w-[70%] mx-auto my-10">
      Hello, Admin here - {data.user.email}
      <form className="w-[300px] my-10">
        <Button
          className="w-full bg-black text-white cursor-pointer"
          formAction={logout}
        >
          Logout
        </Button>
      </form>
    </div>
  );
}
