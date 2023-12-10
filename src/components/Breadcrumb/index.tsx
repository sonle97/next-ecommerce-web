import Link from "next/link";

const Breadcrumb = ({ breadcrumb }: { breadcrumb: string }) => {
  return (
    <div className="py-5">
      <Link href="/" className="hover:opacity-50">
        Trang chủ
      </Link>{" "}
      / <Link href="/san-pham">Product</Link>
    </div>
  );
};

export default Breadcrumb;
