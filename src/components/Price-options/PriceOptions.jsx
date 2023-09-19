import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => { 
    
        const priceOptions = [
            {
                "id": 1,
                "price": 11,
                "name": "Basic Membership",
                "features": [
                    "Access to gym equipment",
                    "Locker room access",
                    "Basic fitness classes",
                    "Free weights area access",
                    "Fitness assessment (1/month)",
                    "Online workout tutorials",
                    "Discounts on gym merchandise"
                ]
            },
            {
                "id": 2,
                "price": 19,
                "name": "Silver Membership",
                "features": [
                    "Access to gym equipment",
                    "Locker room access",
                    "Unlimited fitness classes",
                    "Personal training session (1/month)",
                    "Sauna access",
                    "Nutritional consultation (1/month)",
                    "Group fitness classes",
                    "Yoga and Pilates classes",
                    "Access to swimming pool"
                ]
            },
            {
                "id": 3,
                "price": 29,
                "name": "Gold Membership",
                "features": [
                    "Access to gym equipment",
                    "Locker room access",
                    "Unlimited fitness classes",
                    "Personal training session (2/month)",
                    "Sauna and spa access",
                    "Nutritional consultation (2/month)",
                    "Massage therapy (1/month)",
                    "Access to specialized equipment",
                    "Complimentary smoothie bar"
                ]
            },
            {
                "id": 4,
                "price": 35,
                "name": "Platinum Membership",
                "features": [
                    "Access to gym equipment",
                    "Locker room access",
                    "Unlimited fitness classes",
                    "Personal training session (3/month)",
                    "Sauna and spa access",
                    "Nutritional consultation (3/month)",
                    "Exclusive group fitness classes",
                    "Towel service",
                    "Childcare services",
                    "VIP access to events and seminars"
                ]
            }
        ]

    return (
        <div className="mb-16">
                <h2 className="text-5xl">Best prices in the down</h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
                </div>
        </div>
    );
};

export default PriceOptions;