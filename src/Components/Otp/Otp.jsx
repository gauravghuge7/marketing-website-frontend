
function Otp() {
    return (
        <div>
            <input 
                type="text" 
                id="referral"
                name="referral"
                placeholder="referral (optional)" 
                className="border border-black rounded-lg px-24 py-1 my-3 text-xl flex flex-col text-start  bg-white" 
                minLength={10}
                maxLength={15} 
            />
        </div>
    )
}

export default Otp
