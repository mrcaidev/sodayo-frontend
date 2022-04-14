import { useAuth } from "hooks/use-auth.hook";
import { useLogin } from "hooks/use-login.hook";

export default function IndexPage() {
  const login = useLogin();
  const { profile } = useAuth();
  return (
    <>
      <button
        onClick={() => login({ phone: "18962388966", password: "123123123" })}
      >
        Login
      </button>
      <p>{JSON.stringify(profile)}</p>
    </>
  );
}
