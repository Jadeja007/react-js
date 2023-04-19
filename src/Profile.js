function MyProfile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="profile pic" />;
}
export default MyProfile;

export function Toolbar() {
  function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
  }
  function PlayButton({ movieName }) {
    function playHandler() {
      alert("Playing");
    }
    return <Button onClick={playHandler}>{movieName}</Button>;
  }

  function UploadButton() {
    return <Button onClick={() => alert("Uploading!!")}>Upload Image</Button>;
  }

  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
