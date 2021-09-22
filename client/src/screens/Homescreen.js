import React from 'react'
import accessories from '../accessoriesdata'
import Accessory from '../components/Accessory'

export default function Homescreen() {
    return (
        <div>
            <div className="row">
                {accessories.map(accessory => {
                    return <div className="col-md-4">
                        <div>
                            <Accessory accessory={accessory} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
