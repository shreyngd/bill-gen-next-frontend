import AddBusiness from "@/components/AddBusiness";
import { useRouter } from "next/router";

export default function AddBusinessPage() {
  const router = useRouter();
  return (
    <AddBusiness
      done={() => {
        router.push("/");
      }}
    />
  );
}
