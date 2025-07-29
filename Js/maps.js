document.addEventListener('click',(e)=>{
    switch (e.target.id) {
        case 'MXSON':
                console.log('Sonora');
                document.getElementById('nombre').innerHTML = `Antonia Itzel Martínez Gonzáles`;
                document.getElementById('platillo').innerHTML = `Carne Asada, Machaca con Huevo, Menudo Sonorense, Cahuamanta, Frijoles Maneados, Coyotas.`;
                document.getElementById('fechas').innerHTML = `7 julio - 13 julio`;
                document.getElementById('imagenes').innerHTML = `ver imagenes`;
                document.getElementById('imagenes').href = `/Routes/AboutUs.html`;
                document.getElementById('nombre').innerHTML = `Antonia Itzel Martínez Gonzáles`;
            break;

        case 'MXBCN':
                console.log('Baja California');
            break;
        
        case 'MXCHH':
                console.log('Chihuahua');
            break;

        case 'MXCOA':
                console.log('Coahuila');
            break;
        
        case 'MXTAM':
                console.log('Tamaulipas');
            break;

        case 'MXNLE':
                console.log('Nuevo León');
            break;
        
        case 'MXROO':
                console.log('Quintana Roo');
            break;

        case 'MXCAM':
                console.log('Campeche');
            break;
        
        case 'MXTAB':
                console.log('Tabasco');
            break;

        case 'MXCHP':
                console.log('Chiapas');
            break;
        
        case 'MXCOL':
                console.log('Colima');
            break;

        case 'MXNAY':
                console.log('Nayarit');
            break;
        
        case 'MXBCS':
                console.log('Baja California Sur');
            break;

        case 'MXSIN':
                console.log('Sinaloa');
            break;
        
        case 'MXYUC':
                console.log('Yucatán');
            break;

        case 'MXVER':
                console.log('Veracruz');
            break;
        
        case 'MXJAL':
                console.log('Jalisco');
            break;

        case 'MXMIC':
                console.log('Michoacán');
            break;
        
        case 'MXGRO':
                console.log('Guerrero');
            break;

        case 'MXOAX':
                console.log('Oaxaca');
            break;
        
        case 'MXMEX':
                console.log('México');
            break;

        case 'MXPUE':
                console.log('Puebla');
            break;
        
        case 'MXMOR':
                console.log('Morelos');
            break;

        case 'MXQUE':
                console.log('Querétaro');
            break;
        
        case 'MXHID':
                console.log('Hidalgo');
            break;

        case 'MXGUA':
                console.log('Guanajuato');
            break;
        
        case 'MXSLP':
                console.log('San Luis Potosí');
            break;

        case 'MXZAC':
                console.log('Zacatecas');
            break;
        
        case 'MXAGU':
                console.log('Aguascalientes');
            break;

        case 'MXDUR':
                console.log('Durango');
            break;
        
        case 'MXTLA':
                console.log('Tlaxcala');
            break;

        case 'MXCMX':
                console.log('Ciudad de México');
            break;
    
        default:
            break;
    }
});