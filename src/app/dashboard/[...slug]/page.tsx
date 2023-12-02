export default function Profile({ params }: { params: { slug: string } }) {
  return <div className="text-white">My Profile: {params.slug}</div>;
}
