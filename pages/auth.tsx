import { AuthForm } from "components/AuthForm";
import { Loading } from "components/Loading";
import { useAuth } from "hooks/useAuth";

export default function AuthPage() {
  const { loading } = useAuth({ redirectOnAuth: "/" });

  if (loading) {
    return <Loading />;
  }

  return <AuthForm />;
}
