import './Home.css';

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <section>
                    <h1>This is Gazebo Sessions.</h1>
                    <h3>Check out our upcoming <a className="link" href='#sessions'>sessions</a>
                    </h3>
                </section>
            </header>
        </div>

    );
}

export default Home;
