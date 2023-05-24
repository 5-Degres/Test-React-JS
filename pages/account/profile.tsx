import LayoutHome from "@/components/LayoutHome";
import ProfileForm from "@/components/ProfileForm";
import Breadcrumb from "@/components/Breadcrumb";

const ProfilePage = ({ user }: { user: any }) => {
  const breadcrumbs = [{ name: "Mon profil", href: "#", current: true }];

  return (
    <LayoutHome>
      <Breadcrumb pages={breadcrumbs} />
      <div className="space-y-16 py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <ProfileForm />
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default ProfilePage;
