const Header =({ children, Layout = 'header' }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default Header;