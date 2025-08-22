"use client";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { Loader2, Trash2 } from "lucide-react";
import deleteTransaction from "@/actions/delete-transaction-action";
import { toast } from "sonner";

const TransactionItemActionButton = ({
  id,
  onRemove,
}: {
  id: string | number;
  onRemove: Function;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    toast.loading("Deleting transaction ...", {
      id: `delete:transaction-${id}`,
    });
    try {
      if (typeof id === "string") {
        await deleteTransaction(id);
        onRemove();
      }

      toast.dismiss(`delete:transaction-${id}`);
      toast.success("Transaction has been deleted!");
    } catch (error) {
      toast.dismiss(`delete:transaction-${id}`);
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="sm" disabled={isLoading}>
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete it?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              transaction from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                className="flex flex-row gap-2"
                variant="destructive"
                onClick={handleDelete}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin" />}
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TransactionItemActionButton;
