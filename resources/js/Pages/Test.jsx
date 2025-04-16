import EventCard from "@/Components/EventCard";
import InputSearch from "@/Components/InputSearch";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Test() {
    return (
        <AuthenticatedLayout>
            <Head title="Test" />

            <div className="py-12">
                <div className="flex justify-end mr-1 mb-10">
                    <InputSearch />
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EventCard image="/pic.jpg" />
                    <EventCard
                        title={"Lil O Fest"}
                        image="/osa.jpg"
                        description="Ragers only !"
                        price={10}
                    />
                    <EventCard
                        title={"Plaqueboy's stream"}
                        image="/plaqueboymax.png"
                        description="Join my stream bitches"
                        date="5 Février"
                    />
                    <EventCard image="/pic.jpg" />
                    <EventCard image="/pic.jpg" />
                    <EventCard image="/pic.jpg" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
