import { Quote } from "lucide-react";

interface CommentBoxProps {
  quote: string;
  author: string;
  position?: "left" | "right";
}

const CommentBox = ({ quote, author }: CommentBoxProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-md max-w-[200px] md:max-w-[240px] relative">
      {/* Quote Icon */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center">
        <Quote className="w-3 h-3 text-muted-foreground" />
      </div>

      {/* Quote Text */}
      <p className="text-xs md:text-sm text-foreground leading-relaxed mb-3 italic">
        "{quote}"
      </p>

      {/* Author */}
      <p className="text-xs text-muted-foreground font-medium">
        - {author}
      </p>
    </div>
  );
};

export default CommentBox;
