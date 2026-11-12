import cron from "node-cron"

const members = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        status: "active",
        membershipExpires: "2026-11-15",
    },
    {
        id: 2,
        name: "Bob Williams",
        email: "bob@gmail.com",
        status: "inactive",
        membershipExpires: "2026-11-20",
    },
    {
        id: 3,
        name: "Shannon Jackson",
        email: "shannon@gmail.com",
        membershipExpires: "2026-11-10",
    },
];


cron.schedule("* * * * * ", () => {
    const date = new Date()
    members.forEach((member) => {
        // Comprobar que no haya caducado ya
        if (new Date(member.membershipExpires) - date > 0) {
            // Console log nombre, correo, tiempo restante
            console.log(`Name: ${member.name}, Email: ${member.email}, Time remaining: ${new Date(member.membershipExpires) - date}`)
        } else {
            console.log(`Name: ${member.name}, Email: ${member.email}, Membership expired`)
        }
    })
})