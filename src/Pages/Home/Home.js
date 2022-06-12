import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import EndMsg from "../../components/EndMsg";
import Loading from "../../components/Loading";
import UserInfo from "./UserInfo";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(2);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(`https://randomuser.me/api/?page=1&results=9`);
      const data = await res.json();
      setUsers(data.results);
    };

    getInfo();
  }, []);

  const fetchInfo = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=9`
    );
    const data = await res.json();
    return data.results;
  };

  const fetchData = async () => {
    const infoFormServer = await fetchInfo();

    setUsers([...users, ...infoFormServer]);
    if (infoFormServer.length === 0 || infoFormServer.length < 9) {
      setLoader(false);
    }
    setPage(page + 1);
  };
  return (
    <div className="mt-8 lg:px-12">
      <h1 className="text-3xl text-center">User Informations</h1>
      <InfiniteScroll
        dataLength={users.length}
        next={fetchData}
        hasMore={loader}
        loader={<Loading />}
        endMessage={<EndMsg />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users &&
            users?.map((user, index) => <UserInfo user={user} key={index} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
