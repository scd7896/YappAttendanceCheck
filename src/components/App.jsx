import React from 'react';
import QRCode from 'qrcode.react';
const App = () => {
    return(
        <div>
            <QRCode 
                value="kimserver"/> 
            이것이 앱이다
        </div>
    )
}

export default App;