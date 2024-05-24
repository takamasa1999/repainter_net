import { redirect } from '@/navigation';

type Props = {
 params: { locale: string };
};
export default function Page({ params: { locale } }: Props) {
  redirect(`/home`)
}
