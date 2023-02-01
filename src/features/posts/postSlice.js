import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  reels: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get my posts
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await postService.getPosts(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get reels
export const getReels = createAsyncThunk(
  "reel/getReel",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await postService.getReels(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create a post
export const createPost = createAsyncThunk(
  "/posts/create",
  async (postData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await postService.createPost(postData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create a reel
export const createReel = createAsyncThunk(
  "/reel/create",
  async (reelData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await postService.createReel(reelData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete a post
export const deletePost = createAsyncThunk(
  "/posts/delete",
  async (postId, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await postService.deletePost(postId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPosts: (state) => initialState, //won't persist like user
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })
      .addCase(getReels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reels = action.payload;
      })
      .addCase(getReels.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })
      .addCase(createReel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reels.push(action.payload);
      })
      .addCase(createReel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      });
  },
});

export const { resetPosts } = postSlice.actions;
export default postSlice.reducer;
