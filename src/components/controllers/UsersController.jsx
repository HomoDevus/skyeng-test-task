import UserItem from '../view/UserItem/UserItem'

export default function UsersController({ usersInfo }) {
  return (
    <div>
      {usersInfo?.map(userInfo => (
        <UserItem
          key={userInfo.id}
          avatarUrl={userInfo.avatar_url + '&s=80'}
          login={userInfo.login}
        />
      ))}
    </div>
  )
}
