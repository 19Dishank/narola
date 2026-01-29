function Profile() {
    return (
        <>
            <ProfileItem
                name="Dishank"
                age={21}
                greet={
                    <p>
                        <strong>Hello Good Morning</strong>
                    </p>
                }
            >
                <p>Hobbies: Reading, playing</p>
                <button>Click</button>
            </ProfileItem>
            <ProfileItem
                name="Patel"
                age={21}
                greet={
                    <p>
                        <strong>Hello Good Evening</strong>
                    </p>
                }
            >
                <p>Hobbies: Reading, playing</p>
                <button>Dnt Click</button>
            </ProfileItem>
        </>
    );
}
export default Profile;

function ProfileItem(props) {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age:{props.age}</p>
            <div>{props.greet}</div>
            <div>{props.children}</div>
        </>
    );
}