import AddBusiness from "@/components/AddBusiness";
import Dashboard from "@/components/Dashboard";
import { businessListState } from "@/state/inventorylist";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Home = () => {
  const [businessList] = useRecoilState(businessListState);
  const router = useRouter();
  useEffect(() => {
    if (businessList.length === 0) {
      router.push("/add-business");
    }
  }, []);

  return businessList.length === 0 ? <AddBusiness /> : <Dashboard />;
};

export default Home;
