const Card = ({ name, logo, url,alt, ButtonComponent, ...props }) => {
    return (
      <div id={name} style={{ padding: '10px', borderRadius: '5px', margin: '5px', background: '#545454', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <a href={url} target="_blank">
          <img src={logo} className={`${name} logo`} {...props} />
        </a>
        
        <p>{alt}</p>
  
        <ButtonComponent />
      </div>
    );
  };
  
  export default Card; 



