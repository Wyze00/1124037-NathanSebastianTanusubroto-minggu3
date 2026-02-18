import React from 'react';
import { useAppSelector } from "../../hooks/useAppSelector";
import type { UserInfo } from "../../type/UserInfo";
import { 
    Container, 
    Paper, 
    Avatar, 
    Typography, 
    Divider, 
    Box, 
    Chip, 
    Button 
} from '@mui/material';
import { 
    Email, 
    Badge, 
    AdminPanelSettings, 
    Person, 
    Edit, 
    Fingerprint 
} from '@mui/icons-material';

export default function Profile(): React.JSX.Element {
    const userInfo = useAppSelector(state => state.auth.userInfo) as UserInfo;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <Container maxWidth="sm">
                {/* Profile Card */}
                <Paper elevation={0} className="rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100">
                    
                    {/* Header Decorative Background */}
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 flex justify-end p-6">
                        <Chip 
                            icon={<AdminPanelSettings sx={{ color: 'white !important' }} />}
                            label={userInfo.role.toUpperCase()} 
                            className="backdrop-blur-xl border border-white/30 shadow-lg"
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                color: 'white',                              
                                fontWeight: 'bold',
                                height: 40,
                                borderRadius: '12px',
                                '& .MuiChip-label': {
                                    color: 'white',                         
                                    paddingLeft: '8px',
                                },
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                }
                            }}
                        />
                    </div>

                    {/* Profile Content */}
                    <div className="relative px-8 pb-10">
                        <div className="absolute -top-12 left-8">
                            <Avatar 
                                sx={{ width: 100, height: 100 }}
                                className="border-4 border-white shadow-lg bg-gradient-to-tr from-blue-500 to-purple-500 text-3xl font-bold"
                            >
                                {userInfo.name.charAt(0)}
                            </Avatar>
                        </div>

                        <div className="pt-20">
                            <Box className="flex justify-between items-start mb-6">
                                <div>
                                    <Typography variant="h4" className="font-extrabold text-slate-800">
                                        {userInfo.name}
                                    </Typography>
                                    <Typography variant="body1" className="text-slate-500 flex items-center gap-1">
                                        <Badge fontSize="small" /> Akun User
                                    </Typography>
                                </div>
                                <Button 
                                    variant="outlined" 
                                    startIcon={<Edit />}
                                    className="rounded-xl border-slate-200 text-slate-600 normal-case hover:bg-slate-50"
                                >
                                    Edit
                                </Button>
                            </Box>

                            <Divider className="mb-8 opacity-50" />

                            {/* Info Grid */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <Email />
                                    </div>
                                    <div>
                                        <Typography variant="caption" className="text-slate-400 uppercase font-bold tracking-wider">
                                            Email Address
                                        </Typography>
                                        <Typography variant="body1" className="text-slate-700 font-medium">
                                            {userInfo.email}
                                        </Typography>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        <Fingerprint />
                                    </div>
                                    <div>
                                        <Typography variant="caption" className="text-slate-400 uppercase font-bold tracking-wider">
                                            User ID
                                        </Typography>
                                        <Typography variant="body1" className="text-slate-700 font-mono">
                                            {userInfo.id}
                                        </Typography>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                                        <Person />
                                    </div>
                                    <div>
                                        <Typography variant="caption" className="text-slate-400 uppercase font-bold tracking-wider">
                                            Role Access
                                        </Typography>
                                        <Typography variant="body1" className="text-slate-700 font-medium">
                                            {userInfo.role}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Card */}
                    <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
                        <Typography variant="caption" className="text-slate-400">
                            Ini footer
                        </Typography>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}