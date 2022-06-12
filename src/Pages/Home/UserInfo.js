const UserInfo = ({ user }) => {
  return (
    <div class="card lg:card-side w-full mx-auto bg-base-100 shadow-xl mt-4">
      <figure>
        <div class="avatar m-6">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.picture?.large} alt="" />
          </div>
        </div>
      </figure>

      <div class="card-body">
        <h2 class="card-title">
          {user?.name?.title + " "}
          {user?.name?.first + " "}
          {user?.name?.last}
        </h2>
        <p>Email : {user?.email}</p>
        <p>Country : {user?.location?.country}</p>
      </div>
    </div>
  );
};

export default UserInfo;
