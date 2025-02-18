import { useState } from 'react';
import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input, TextArea } from '@/components/ui/Input';

interface Review {
  id: number;
  name: string;
  email: string;
  rating: number;
  comment: string;
}

const RatingProduct = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Sơn Lê',
      email: 'son.le@gmai.com',
      rating: 5,
      comment: 'Sản phẩm rất tuyệt!',
    },
    {
      id: 2,
      name: 'Ngọc Anh',
      email: 'son.le@gmai.com',
      rating: 4,
      comment: 'Khá tốt, nhưng giao hàng chậm.',
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  });

  const handleAddReview = () => {
    if (!newReview.name || !newReview.email || !newReview.comment) return;
    setReviews([...reviews, { id: Date.now(), ...newReview }]);
    setNewReview({ name: '', email: '', rating: 5, comment: '' });
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : '0';

  return (
    <div className="max-w-2xl mx-auto lg:p-4 p-0">
      <h2 className="text-xl font-bold text-center mb-4">Đánh giá sản phẩm</h2>
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">{averageRating} / 5</p>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              color={i < Math.round(Number(averageRating)) ? 'gold' : 'black'}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          ({reviews.length} đánh giá)
        </p>
      </div>

      <div className="mb-4 p-4 border rounded-lg shadow-sm">
        <h3 className="md:text-lg text-base text-center font-semibold mb-2">
          Viết đánh giá
        </h3>
        <Input
          type="text"
          placeholder="Tên của bạn"
          // className="w-full p-2 border rounded mb-2"
          value={newReview.name}
          onChange={(e: any) =>
            setNewReview({ ...newReview, name: e.target.value })
          }
        />
        <Input
          type="email"
          placeholder="Email"
          value={newReview.email}
          onChange={(e: any) =>
            setNewReview({ ...newReview, email: e.target.value })
          }
        />
        <TextArea
          placeholder="Nhận xét của bạn"
          className="w-full p-2 border rounded mb-2"
          value={newReview.comment}
          onChange={(e: any) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        ></TextArea>
        <div className="flex items-center gap-2 mb-2">
          <p>Đánh giá:</p>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              color={i < newReview.rating ? 'gold' : 'gray'}
              className="cursor-pointer"
              onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
            />
          ))}
        </div>
        <Button onClick={handleAddReview} className="w-full mt-4">
          Gửi đánh giá
        </Button>
      </div>

      <div className="space-y-3">
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="p-4">
              <p className="font-semibold">{review.name}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    color={i < review.rating ? 'gold' : 'gray'}
                  />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingProduct;
