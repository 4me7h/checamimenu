import React from 'react'

const Navbar = () => {
    const styles = {
        textCenter: {
            textAlign: "center",
        }
    }
    return (
    <div style={styles.textCenter}>
        {/*This is a deploy test on Netlify*/}
        <h1>
            Checamimenu
        </h1>
        <p>
            Próximamente
        </p>
    </div>
    );
}

export default Navbar;