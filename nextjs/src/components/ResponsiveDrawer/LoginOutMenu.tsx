import { UserProfile } from "@auth0/nextjs-auth0/client";
import { Button, Typography } from "@mui/material"
import { useTranslations } from "next-intl";
import Link from "next/link"

export default function LoginOutMenu({ user }: { user: UserProfile | undefined; }) {
    const t = useTranslations('DrawerMenu');
    return (
        <>
            <Button>
                {user ?
                    <Link href="/api/auth/logout">{t("logout")}</Link>
                    :
                    <Link href="/api/auth/login">{t("login")}</Link>
                }
            </Button>
            {user &&
                <Typography sx={{pl:1, pr:1}}component={"p"} variant={"body1"}>
                    {t.rich("welcome_back", { user: user.name })}
                </Typography>
            }
        </>
    )
}