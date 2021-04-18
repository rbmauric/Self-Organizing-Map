// Sketch File for Simulating a Self-Organizing Map (SOM)
// Adapted from Prof. Siska's base code
// Reference: p5js.org/reference

// Team RPB:
// Ryan Mauricio
// Patrick Mahoney
// Britney Fernandez

// Canvas Variables
var g_canvas = { cell_size:10, wid:64, hgt:48 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 24; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

// SOM Variables
// var vect = { P, Q, R }
// var node = { neighbor, weight_vect, class }

// function: setup
// Sets up grid and fills each cell in grid with a node object with random values
function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 10, 50, 'white', 'yellow' );
}

// function: SOM Learning Algorithm
// Steps:
// 1. Given an input vector, calculate Euclidean Distance to every other cell in grid
//      a. Smallest distance = "Winner" Node
// 3. Move "Winner" node's weight_vect towards input vector
// 4. Move neighbor node's weight_vect towards "winner" node
// 5. Move sub-neighbor node's weight_vect towards neighbor nodes
//      a. Shared sub-neighbors (i.e., SW or NE instead of NN or SS) move towards
//         both directions 
function SOM_Learning(input_vect) {

}

// function: Move Cells
// Given source node and destination node, move source towards destination
function move_node(source_node, dest_node) {

}

// function: Update Display
// Given a node, increment it's color channel while simultaneously decrementing
// it's neighbor's color channels.
function display_update(node) {
    
}

// function: Euclidean Distance
// Given two vectors, calculate their Euclidean Distance
function euclid_dist(vect1, vect2) {

}

// function: SOM
// Continuously perform SOM functionality until all input vectors have been input
// and epoch's max buddy distance is below our goal value.
function SOM()  // Update our display.
{
    noLoop(); 

    //input++;
    //SOM_Learning(input);

    loop();
}

// function: Draw
// Called every frame, can control how long SOM runs and can pause SOM
function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        if (!g_stop) SOM();
    }
}

// function: Pause Draw
// If any button is pressed, the draw function will be paused.
function keyPressed( )
{
    g_stop = ! g_stop;
}

