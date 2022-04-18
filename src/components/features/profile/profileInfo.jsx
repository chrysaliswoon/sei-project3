export default function Profile() {
  return (
    <div>
      <div>
        <p>This contains your profile information.</p>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name"></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div>
            <label htmlFor="photo">Photo: </label>
            <input type="file" id="photo" name="photo"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
