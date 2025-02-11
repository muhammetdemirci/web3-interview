import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? 'List user Ethereum balance' : 'Please login first'}
                    </div>
                    <div className="mb-12">
                        {user?.balance !== undefined ? user.balance : ''}
                    </div>
                      <div className="mb-12">
                       
                        {user?.wallet_address !== undefined ? <>
                            Wallet Address <br/>
                            {user.wallet_address}
                        </> : ''}
                    </div>
                </div>
            </h2>
        </div>
    )
}
