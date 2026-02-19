import {SettingContent} from "@/features/Settings/components/SettingContent.tsx";
import {Input} from "@/components/ui/input.tsx";
import {FieldGroup} from "@/components/ui/field.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

const Profile = () => {
    return (
        <SettingContent
            title={"Profile"}
            description={"This is how others will see you on the site."}
        >
            <form>
                <FieldGroup>
                    <Input
                        label="First Name"
                        type="text"
                        placeholder="John"
                        required
                        description={"This is your public display name."}
                        // error={errors.first_name?.message}
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        placeholder="Doe"
                        required
                        // error={errors.last_name?.message}
                        description={"This is your public display last name."}
                    />
                    <Input
                        placeholder="m@example.com"
                        label={"Email"}
                        required
                        // error={errors.email?.message}
                        description={" We'll use this to contact you. We will not share your email\n" +
                            "with anyone else."}
                    />
                    <Textarea
                        required={true}
                        label={"Bio"}
                        placeholder={"Tell us a little bit about yourself"}
                        description={"You can @mention other users and organizations to link to them.\n" +
                            "\n"}
                    />
                    <div className={"w-fit"}>
                        <Button type="submit">Update profile</Button>
                    </div>

                </FieldGroup>
            </form>
        </SettingContent>
    )
}
export default Profile;