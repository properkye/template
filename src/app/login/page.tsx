import { LoginForm } from "@/components/containers/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }

  return (
    <div className="grid place-content-center w-[100vw] h-[100vh]">
      <LoginForm />
    </div>
  );
}
