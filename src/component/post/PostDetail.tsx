import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { 
    Container, Typography, Button, Box, Paper, Divider, 
    Avatar, Chip, CircularProgress, 
} from "@mui/material";
import { ArrowBack, CalendarMonth, Tag } from "@mui/icons-material";
import type { Post } from "./type/Post";

export default function PostDetail(): React.JSX.Element {
    const { postId } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const fetchPost = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5173/api/post/${postId}`);
            const data: Post = await response.json();
            if (data) setPost(data);
        } catch (error) {
            console.error("Error fetching post:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [postId]);

    if (loading) {
        return (
            <Box className="flex justify-center items-center min-h-[60vh]">
                <CircularProgress />
            </Box>
        );
    }

    if (!post) {
        return (
            <Container className="text-center py-20">
                <Typography variant="h6">Post tidak ditemukan.</Typography>
                <Button onClick={() => navigate('/post')} className="mt-4">Kembali ke Daftar</Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" className="py-10">
            <Button 
                startIcon={<ArrowBack />} 
                onClick={() => navigate('/post')}
                className="mb-6 text-slate-600 hover:text-blue-600"
            >
                Back to Feed
            </Button>

            <Paper elevation={0} className="p-8 border border-slate-200 rounded-2xl shadow-sm">
                <Box className="flex items-center gap-3 mb-6">
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {post.user.name.charAt(0)}
                    </Avatar>
                    <Box>
                        <Typography variant="subtitle1" className="font-bold leading-none">
                            {post.user.name}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" className="flex items-center gap-1">
                            <CalendarMonth sx={{ fontSize: 14 }} /> 
                            {new Date(post.createdAt).toLocaleDateString('id-ID', { 
                                day: 'numeric', month: 'long', year: 'numeric' 
                            })}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="h3" component="h1" className="font-extrabold mb-6 text-slate-900 leading-tight">
                    {post.title}
                </Typography>

                <Box className="flex gap-2 mb-8">
                    <Chip label={`ID: ${post.id}`} size="small" variant="outlined" icon={<Tag sx={{ fontSize: 14 }} />} />
                    <Chip label="Article" size="small" color="primary" variant="filled" />
                </Box>

                <Divider className="mb-8" />

                <Typography variant="body1" className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                    {post.content || "No content available for this post."}
                </Typography>
            </Paper>
        </Container>
    );
}