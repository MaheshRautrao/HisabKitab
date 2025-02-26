"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type AllExpensesCardProps = {
  month: string;
  date: string;
  category: string;
  title: string;
  group?: {
    id: string;
    name: string;
  };
  paidByUserId: string;
  paidByUserName: string;
  paidByUserProfile: string;
  amount: string;
  borrowers: [
    {
      userId: string;
      userName: string;
      amount: string;
      userProfile: string;
    }
  ];
  comments?: [
    {
      userId: string;
      userName: string;
      message: string;
      createdAt: string;
    }
  ];
  userContext: {
    createdAt: string;
    updatedAt: string;
    createdByUserId: string;
    createdByUserName: string;
    updatedByUserName: string;
    updatedByUserId: string;
    createdByUserProfile: string;
    updatedByUserProfile: string;
  };
};

const loggedInUserId = "1";

export function AllExpensesCard({
  month,
  date,
  category,
  title,
  group,
  paidByUserId,
  paidByUserName,
  paidByUserProfile,
  amount,
  borrowers,
  comments,
  userContext,
}: AllExpensesCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const otherBorrowersCount = borrowers.filter(
    (borrower) => borrower.userId !== loggedInUserId
  ).length;

  const otherBorrower = borrowers.find(
    (borrower) => borrower.userId !== loggedInUserId
  );

  return (
    <div
      className="grid grid-cols-12 gap-3 rounded-md border border-black cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="col-span-8 gap-2 flex items-center">
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="text-sm">{month}</div>
          <div className="text-2xl">{date}</div>
        </div>
        <div>
          <Image
            src={`/categories/${category}.png`}
            alt="Expense Category"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="text-lg">{title}</div>
          {group && (
            <div className="border border-gray-400 text-sm flex rounded-sm justify-center items-center bg-gray-100 w-fit px-1">
              <Link href={`/${group.id}`}>{group.name}</Link>
            </div>
          )}
        </div>
        {comments?.length ?? 0 > 0 ? (
          <div className="h-full">
            <MessageSquare height={20} width={20} />
          </div>
        ) : null}
      </div>
      <div className="col-span-2 flex flex-col items-end">
        <div className="text-gray-400">
          {paidByUserId == loggedInUserId ? "you" : paidByUserName} paid
        </div>
        <div className="font-bold text-lg">₹{amount}</div>
      </div>
      <div className="col-span-2 flex flex-col items-start">
        {paidByUserId == loggedInUserId ? (
          <div>
            <div className="text-gray-400">
              You lent
              {otherBorrowersCount > 1 ? "" : otherBorrower?.userName ?? ""}
            </div>
            <div className="font-bold text-lg">₹{amount}</div>
          </div>
        ) : (
          <div>
            <div className="text-gray-400"> {paidByUserName} lent you</div>
            <div className="font-bold text-lg">₹{amount}</div>
          </div>
        )}
      </div>
      <div
        className={`col-span-12 mt-4 transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-zinc-200">
          <div className="flex gap-5">
            <div>
              <Image
                src={`/categories/${category}.png`}
                alt="Expense Category"
                width={75}
                height={75}
              />
            </div>
            <div>
              <div>{title}</div>
              <div className="text-xl font-bold">₹{amount}</div>
              <div>
                Added by {userContext.createdByUserName} on
                {userContext.createdAt}
              </div>
              {userContext.createdAt != userContext.updatedAt ? (
                <div>
                  Last updated by {userContext.updatedByUserName} on{" "}
                  {userContext.updatedAt}
                </div>
              ) : null}
            </div>
            <div>
              <Button>Edit Expense</Button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="border-t border-gray-300 pt-4">
              <div className="font-bold">Borrowers:</div>
              {borrowers.map((borrower) => (
                <div key={borrower.userId} className="flex items-center mt-2">
                  <Image
                    src={borrower.userProfile}
                    alt={borrower.userName}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div className="ml-2">
                    <div className="font-bold">{borrower.userName}</div>
                    <div>₹{borrower.amount}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {comments && comments.length > 0 && (
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <div className="font-bold">Comments:</div>
                  {comments.map((comment) => (
                    <div key={comment.userId} className="mt-2">
                      <div className="font-bold">{comment.userName}</div>
                      <div>{comment.message}</div>
                      <div className="text-gray-400 text-sm">
                        {comment.createdAt}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
