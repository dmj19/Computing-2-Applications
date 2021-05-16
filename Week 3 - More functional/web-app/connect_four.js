const connect_four = Object.create(null);

const empty_board = array [
    [null, null, null, null, null],
    [null, null, null, null, null,],
    [null, null, null, null, null,],
    [null, null, null, null, null,],
    ];

connect_four.new_board = () => empty_board, //this function takes no arguments and returns a new empty board.

connect_four.red_move = (col_number) => (board) => 
    board[3,col_number] = "R";
    };

connect_four.yellow_move = (col_number) => (board) => 
    board[3,col_number] = "Y";
    };

connect_fourstatus = (board) => result_string

const yellow_counters = (board.filter(c => "R")).length;
const red_counters = (board.filter(c=>"Y")).length;

//assume red starts 

const result_string = function(board) {
    if red_counters > yellow_counters; {
        return "yellow move"
    };
    else; {
        return "red move"
    };
};

const is_column_free = (number) => (board) => ; {
    return (Boolean (board[,number]!=="R" and board[,number]!=="Y"));
}; 
