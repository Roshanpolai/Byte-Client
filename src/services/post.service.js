
import api from "../api/axios.js";

export class Service {

    // Create Post
    async createPost(formData) {
        try {
            const response = await api.post("/posts", formData);
            return response.data.data;
        } catch (error) {
            console.log("Create Post Error:", error);
            throw error;
        }
    }

    // Update Post
    async updatePost(id, formData) {
        try {
            const response = await api.patch(`/posts/${id}`, formData);
            return response.data.data;
        } catch (error) {
            console.log("Update Post Error:", error);
            throw error;
        }
    }

    // Delete Post
    async deletePost(id) {
        try {
            await api.delete(`/posts/${id}`);
            return true;
        } catch (error) {
            console.log("Delete Post Error:", error);
            return false;
        }
    }

    // Get Single Post
    async getPost(slug) {
        try {
            const response = await api.get(`/posts/slug/${slug}`);
            return response.data.data;
        } catch (error) {
            console.log("Get Post Error:", error);
            return null;
        }
    }

    // Get All Posts
    async getPosts() {
        try {
            const response = await api.get("/posts");
            return response.data.data;
        } catch (error) {
            console.log("Get Posts Error:", error);
            return [];
        }
    }

    // No longer needed because backend uploads to Cloudinary
    async uploadFile(file) {
        return file;
    }

    async deleteFile() {
        return true;
    }

    getFilePreview(file) {
        return file?.url;
    }
}

const service = new Service();

export default service;